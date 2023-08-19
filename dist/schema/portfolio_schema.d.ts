export const Portfolio: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: any[];
    developFields: any[];
    designFields: any[];
    images: any[];
    text?: string | undefined;
    url?: string | undefined;
    title?: string | undefined;
    subTitle?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: any[];
    developFields: any[];
    designFields: any[];
    images: any[];
    text?: string | undefined;
    url?: string | undefined;
    title?: string | undefined;
    subTitle?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
}> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: any[];
    developFields: any[];
    designFields: any[];
    images: any[];
    text?: string | undefined;
    url?: string | undefined;
    title?: string | undefined;
    subTitle?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    toObject: {
        virtuals: boolean;
    };
    toJSON: {
        virtuals: boolean;
    };
    versionKey: false;
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: any[];
    developFields: any[];
    designFields: any[];
    images: any[];
    text?: string | undefined;
    url?: string | undefined;
    title?: string | undefined;
    subTitle?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: any[];
    developFields: any[];
    designFields: any[];
    images: any[];
    text?: string | undefined;
    url?: string | undefined;
    title?: string | undefined;
    subTitle?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: any[];
    developFields: any[];
    designFields: any[];
    images: any[];
    text?: string | undefined;
    url?: string | undefined;
    title?: string | undefined;
    subTitle?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
import mongoose from 'mongoose';
