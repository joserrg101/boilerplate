<?php

namespace Sebastienheyd\Boilerplate\View\Composers;

use Illuminate\View\View;

class TinymceComposer extends ComponentComposer
{
    protected $props = [
        'errors',
        'group-class',
        'group-id',
        'groupClass',
        'groupId',
        'help',
        'id',
        'label',
        'name',
        'value',
    ];

    public function compose(View $view)
    {
        parent::compose($view);

        $data = $view->getData();

        $view->with('id', $data['id'] ?? uniqid('tinymce_'));

        // Check if sebastienheyd/boilerplate-media-manager is installed
        $providers = app()->getProviders('Sebastienheyd\BoilerplateMediaManager\ServiceProvider');
        $view->with('hasMediaManager', count($providers) === 1);
    }
}
