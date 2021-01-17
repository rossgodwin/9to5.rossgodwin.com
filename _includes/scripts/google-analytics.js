{% if site.google_analytics_measurement_id != "" %}
	<!-- Google Analytics -->

	<script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics_measurement_id }}"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', '{{ site.google_analytics_measurement_id }}');
	</script>
{% endif %}