export const PortfolioUser: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email?: string | undefined;
    name?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email?: string | undefined;
    name?: string | undefined;
}> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email?: string | undefined;
    name?: string | undefined;
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
    email?: string | undefined;
    name?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email?: string | undefined;
    name?: string | undefined;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email?: string | undefined;
    name?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
import mongoose from 'mongoose';
