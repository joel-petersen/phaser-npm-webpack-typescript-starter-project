/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class ImagesBackgroundTemplate {
        static getName(): string { return 'background_template'; };

        static getPNG(): string { return require('assets/images/background_template.png'); };
    }
}

export namespace Atlases {
    enum AtlasesPreloadSpritesArrayFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesArray {
        static getName(): string { return 'preload_sprites_array'; };

        static getJSONArray(): string { return require('assets/atlases/preload_sprites_array.json'); };

        static getPNG(): string { return require('assets/atlases/preload_sprites_array.png'); };

        static Frames = AtlasesPreloadSpritesArrayFrames;
    }
    enum AtlasesPreloadSpritesHashFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesHash {
        static getName(): string { return 'preload_sprites_hash'; };

        static getJSONHash(): string { return require('assets/atlases/preload_sprites_hash.json'); };

        static getPNG(): string { return require('assets/atlases/preload_sprites_hash.png'); };

        static Frames = AtlasesPreloadSpritesHashFrames;
    }
    enum AtlasesPreloadSpritesXmlFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesXml {
        static getName(): string { return 'preload_sprites_xml'; };

        static getPNG(): string { return require('assets/atlases/preload_sprites_xml.png'); };

        static getXML(): string { return require('assets/atlases/preload_sprites_xml.xml'); };

        static Frames = AtlasesPreloadSpritesXmlFrames;
    }
}

export namespace Audio {
    export class AudioMusic {
        static getName(): string { return 'music'; };

        static getAC3(): string { return require('assets/audio/music.ac3'); };
        static getM4A(): string { return require('assets/audio/music.m4a'); };
        static getMP3(): string { return require('assets/audio/music.mp3'); };
        static getOGG(): string { return require('assets/audio/music.ogg'); };
    }
}

export namespace Audiosprites {
    export class AudiospritesSfx {
        static getName(): string { return 'sfx'; };

        static getAC3(): string { return require('assets/audiosprites/sfx.ac3'); };
        static getJSON(): string { return require('assets/audiosprites/sfx.json'); };
        static getM4A(): string { return require('assets/audiosprites/sfx.m4a'); };
        static getMP3(): string { return require('assets/audiosprites/sfx.mp3'); };
        static getOGG(): string { return require('assets/audiosprites/sfx.ogg'); };
    }
}

export namespace BitmapFonts {
    export class FontsFontFnt {
        static getName(): string { return 'font_fnt'; };

        static getFNT(): string { return require('assets/fonts/font_fnt.fnt'); };
        static getPNG(): string { return require('assets/fonts/font_fnt.png'); };
    }
    export class FontsFontXml {
        static getName(): string { return 'font_xml'; };

        static getPNG(): string { return require('assets/fonts/font_xml.png'); };
        static getXML(): string { return require('assets/fonts/font_xml.xml'); };
    }
}

export namespace JSON {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace XML {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Text {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Misc {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
