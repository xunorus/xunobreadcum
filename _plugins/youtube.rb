class YouTube < Liquid::Tag
  #Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/
  Syntax = /^\s*([^\s]+)(?:\s+(\d+)\s+(\d+)\s*)?/

  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @id = $1

      if $2.nil? then
          @width = 560
          @height = 420
      else
          @width = $2.to_i
          @height = $3.to_i
      end
    else
      raise "No YouTube ID provided in the \"youtube\" tag"
    end
  end

  def render(context)
# "<div id=\"top-player\"  data-id=\"#{@id}\"></div><a href=\"#\" id=\"pause\">Pause</a> <a href=\"#\" id=\"play\">Play</a>"
 "<iframe width=\"#{@width}\" height=\"#{@height}\"  src=\"https://www.youtube.com/embed/#{@id}\" frameborder=\"0\" allowfullscreen></iframe>"
  end

  Liquid::Template.register_tag "youtube", self
end
