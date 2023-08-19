export const Comments: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    text: string;
    contentId: string;
    kind?: string | undefined;
    userid?: mongoose.Types.ObjectId | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    text: string;
    contentId: string;
    kind?: string | undefined;
    userid?: mongoose.Types.ObjectId | undefined;
}> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    text: string;
    contentId: string;
    kind?: string | undefined;
    userid?: mongoose.Types.ObjectId | undefined;
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
    text: string;
    contentId: string;
    kind?: string | undefined;
    userid?: mongoose.Types.ObjectId | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    text: string;
    contentId: string;
    kind?: string | undefined;
    userid?: mongoose.Types.ObjectId | undefined;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    text: string;
    contentId: string;
    kind?: string | undefined;
    userid?: mongoose.Types.ObjectId | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
import mongoose from 'mongoose';
