<div>
<table class="table table-sm table-condensed table-striped table-hover">
@foreach($widgets as $widget)
    @if($widget->permission === null || Auth::user()->ability('admin', $widget->permission))
        <tr>
            <td>
                <strong>{{ $widget->label }}</strong><br>
                <small class="text-muted">{{ $widget->description }}</small>
            </td>
            <td class="align-middle text-right">
                @if(in_array($widget->slug, $installed ?? []))
                <button type="button" class="btn btn-outline-secondary" data-action="remove-widget" data-slug="{{ $widget->slug }}">@lang('boilerplate::widgets.uninstall')</button>
                @else
                <button type="button" class="btn btn-primary" data-action="add-widget" data-slug="{{ $widget->slug }}">@lang('boilerplate::widgets.install')</button>
                @endif()
            </td>
        </tr>
    @endif()
@endforeach
</table>
</div>