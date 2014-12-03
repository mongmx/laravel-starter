<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />

	<title>
	@section('title')
		{{{ Lang::get('core.administration') }}}
	@show
	</title>

	@yield('head-scripts-pre')

	@include(Theme::path('admin/css'))
	@include(Theme::path('admin/js'))

	@yield('head-scripts')

	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
	@include(Theme::path('admin/navigation/main'))

	@yield('breadcrumb')

	
	<div class="container-fluid">
		@yield('content')
	</div>
	
	<footer class="clearfix">
		@yield('footer')
	</footer>

	@yield('scripts')
</body>
</html>