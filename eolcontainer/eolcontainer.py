import pkg_resources

from django.template import Context, Template

from xblock.core import XBlock
from xblock.fields import Integer, Scope, String
from xblock.fragment import Fragment
from xblockutils.studio_editable import StudioEditableXBlockMixin

# Make '_' a no-op so we can scrape strings
_ = lambda text: text


class EolContainerXBlock(StudioEditableXBlockMixin, XBlock):

    display_name = String(
        display_name=_("Display Name"),
        help=_("Display name for this module"),
        default="Eol Container XBlock",
        scope=Scope.settings,
    )

    icon_class = String(
        default="other",
        scope=Scope.settings,
    )

    # TYPE
    type = String(
        display_name = _("Tipo"),
        help = _("Selecciona el tipo de capsula"),
        default = "Exploremos",
        values = ["Contenido", "Observacion", "Exploremos", "Instruccion"],
        scope = Scope.settings
    )

    # Content
    content = String(
        display_name="Contenido de Capsula", 
        multiline_editor='html', 
        resettable_editor=False,
        default="Contenido de la capsula.", 
        scope=Scope.settings,
        help="Indica el contenido de la capsula"
    )

    editable_fields = ('type', 'content')

    has_author_view = True

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    def student_view(self, context=None):
        html_str = pkg_resources.resource_string(__name__, "static/html/eolcontainer.html")
        frag = Fragment(unicode(html_str).format(self=self))
        css_str = pkg_resources.resource_string(__name__, "static/css/eolcontainer.css")
        frag.add_css(unicode(css_str))
        js_str = pkg_resources.resource_string(__name__,
                                               "static/js/src/eolcontainer.js")
        frag.add_javascript(unicode(js_str))
        frag.initialize_js('EolContainerXBlock')
        return frag
    
    def author_view(self, context=None):
        html_str = pkg_resources.resource_string(__name__, "static/html/author_view.html")
        frag = Fragment(unicode(html_str).format(self=self))
        css_str = pkg_resources.resource_string(__name__, "static/css/eolcontainer.css")
        frag.add_css(unicode(css_str))
        js_str = pkg_resources.resource_string(__name__,
                                               "static/js/src/eolcontainer.js")
        frag.add_javascript(unicode(js_str))
        frag.initialize_js('EolContainerXBlock')
        return frag

    def get_context(self):
        return {
            'xblock': self
        }

    def render_template(self, template_path, context):
        template_str = self.resource_string(template_path)
        template = Template(template_str)
        return template.render(Context(context))
    