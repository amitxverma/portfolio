<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitb24ade09a9b30ce08db3852047ed462c
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitb24ade09a9b30ce08db3852047ed462c', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitb24ade09a9b30ce08db3852047ed462c', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitb24ade09a9b30ce08db3852047ed462c::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
