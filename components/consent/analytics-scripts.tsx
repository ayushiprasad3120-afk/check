"use client";

import Script from "next/script";
import { useConsent } from "@/lib/consent/consent-context";
import { useActiveCampaign } from "@/lib/campaign/campaign-context";
import { resolveAnalyticsIds } from "@/lib/analytics/providers";

/**
 * The ONLY place vendor analytics/ad scripts are injected. Gated
 * strictly by consent category: GTM/GA4/Clarity require "analytics"
 * consent; Google Ads conversion tracking and Meta Pixel require
 * "marketing" consent. IDs are resolved per active campaign (falling
 * back to global config) via resolveAnalyticsIds(), so a paused or
 * missing campaign never breaks script injection — it just uses the
 * site defaults.
 */
export function AnalyticsScripts() {
  const { consent } = useConsent();
  const campaign = useActiveCampaign();
  const ids = resolveAnalyticsIds(campaign?.analytics);

  return (
    <>
      {consent.analytics && ids.gtmContainerId && (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${ids.gtmContainerId}');`}
        </Script>
      )}

      {consent.analytics && ids.ga4MeasurementId && !ids.gtmContainerId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ids.ga4MeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${ids.ga4MeasurementId}');`}
          </Script>
        </>
      )}

      {consent.analytics && ids.microsoftClarityId && (
        <Script id="clarity-loader" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${ids.microsoftClarityId}");`}
        </Script>
      )}

      {consent.marketing && ids.googleAdsConversionId && (
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('config', '${ids.googleAdsConversionId}');`}
        </Script>
      )}

      {consent.marketing && ids.metaPixelId && (
        <Script id="meta-pixel-loader" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${ids.metaPixelId}');fbq('track', 'PageView');`}
        </Script>
      )}
    </>
  );
}
