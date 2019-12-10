


var READTHEDOCS_DATA = {
    "project": "momentjscom",
    "version": "latest",
    "language": "en",
    "programming_language": "js",
    "page": null,
    "theme": "mkdocs",
    "builder": "mkdocs",
    "docroot": "docs",
    "source_suffix": ".md",
    "api_host": "https://readthedocs.org",
    "ad_free": false,
    "commit": "1a3cb258db49ef1c67f232d27f67f0b453b4268c",
    "global_analytics_code": "UA-17997319-1",
    "user_analytics_code": null
}

// Old variables
var doc_version = "latest";
var doc_slug = "momentjscom";
var page_name = "None";
var html_theme = "mkdocs";

// mkdocs_page_input_path is only defined on the RTD mkdocs theme but it isn't
// available on all pages (e.g. missing in search result)
if (typeof mkdocs_page_input_path !== "undefined") {
  READTHEDOCS_DATA["page"] = mkdocs_page_input_path.substr(
      0, mkdocs_page_input_path.lastIndexOf(READTHEDOCS_DATA.source_suffix));
}
