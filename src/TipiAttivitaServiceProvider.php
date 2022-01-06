<?php

namespace Openstamanager\TipiAttivita;

use Illuminate\Support\ServiceProvider;

class TipiAttivitaServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/attivita.tipi.php', 'attivita.tipi');

        $this->publishConfig();
        $this->loadRoutesFrom(__DIR__ . '/routes.php');

        $this->publishes([
            __DIR__ . '/../dist' => public_path('build/vendor/openstamanager/attivita.tipi')
        ], 'attivita.tipi:assets');
        $this->publishes([
            __DIR__ . '/../dist' => resource_path('static/vendor/openstamanager/attivita.tipi')
        ], 'attivita.tipi:assets-dev');

        // $this->loadViewsFrom(__DIR__.'/resources/views', 'attivita.tipi');
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
    }

    /**
     * Publish Config
     *
     * @return void
     */
    public function publishConfig(): void
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/attivita.tipi.php' => config_path('attivita.tipi.php'),
            ], 'config');
        }
    }
}
