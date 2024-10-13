<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <meta title="Infinite UMN">
        <meta name="description" content="  Infinite adalah malam puncak yang wajib dihadiri oleh seluruh Mahasiswa Baru Informatika UMN angkatan 2024. Acara ini merupakan syarat kelulusan dari perkenalan prodi Informatika. Bergabunglah dalam momen bonding yang tak terlupakan dengan teman-teman seangkatan serta mahasiswa dari angkatan lain. Ini adalah kesempatan emas untuk memperluas jaringan dan berinteraksi dengan alumni yang telah sukses. Dihadiri dengan beragam permainan seru dan aktivitas menarik, Infinite akan memastikan bahwa kalian tetap excited dan terlibat sepanjang acara. Mari kita ciptakan kenangan indah dan hubungan yang kuat di malam yang penuh keceriaan ini!">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <script type="text/javascript"
        src="https://app.midtrans.com/snap/snap.js"
        data-client-key="Mid-client-M9qkZOIbj2L51U05"></script>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
