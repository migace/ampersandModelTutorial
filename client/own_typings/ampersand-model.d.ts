declare module ampersand {
    interface AmpersandState {}

    interface AmpersandCollection {}

    interface ModelExtendOptions {
        parse?: boolean;
        parent?: AmpersandState;
        collection?: AmpersandCollection;
    }

    interface ModelSaveOptions {
        patch?: boolean;
        success: (model: AmpersandCollection, response: any) => void;
    }

    interface AmpersandModel<TProps> {
        save: (attrs?: TProps, options?: ModelSaveOptions) => void;
    }

    interface AmpersandModelConstructor<TProps, TModel extends AmpersandModel<any>> {
         new (attrs: TProps, options?: ModelExtendOptions): TModel;
    }

    interface ExtendOptions {
        props?: {};
        session?: {};
        derived?: {};
        urlRoot?: {};
        url?: {};
    }

    interface AmpersandModelStatic {
        extend: <TProps, TModel extends AmpersandModel<any>>(options: ExtendOptions) => AmpersandModelConstructor<TProps, TModel>;
    }
}

declare module "ampersand-model" {
    export = ampersandModel;
}

declare var ampersandModel: ampersand.AmpersandModelStatic;
