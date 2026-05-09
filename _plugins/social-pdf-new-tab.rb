# frozen_string_literal: true

# jekyll-socials renders CV PDF links without target="_blank", so the PDF replaces
# the current tab. CV page links add target explicitly in _layouts/cv.liquid.
# This hook adds target + rel for any <a href="...pdf"> that does not already set target.

module Jekyll
  module SocialPdfNewTab
    PDF_ANCHOR = %r{<a(\s+)(?![^>]*\btarget\s*=)href=(["'])([^"']+\.pdf(?:\?[^"']*)?)\2}i

    def self.transform(html)
      return html unless html

      html.gsub(PDF_ANCHOR, '<a\1target=\2_blank\2 rel=\2noopener noreferrer\2 href=\2\3\2')
    end
  end
end

Jekyll::Hooks.register :pages, :post_render, priority: :low do |page|
  page.output = Jekyll::SocialPdfNewTab.transform(page.output) if page.output
end

Jekyll::Hooks.register :documents, :post_render, priority: :low do |doc|
  doc.output = Jekyll::SocialPdfNewTab.transform(doc.output) if doc.output
end
