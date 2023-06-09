import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCameraSilent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.7 1.355a.61.61 0 0 0-.358.375.746.746 0 0 0-.001.581c.043.102.633.721 1.884 1.973l1.822 1.824-.286.092c-.606.194-1.277.622-1.686 1.073a4.232 4.232 0 0 0-.962 1.795l-.093.352v8.2l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083 6.236 0 6.376-.002 6.765-.081a5.37 5.37 0 0 0 .621-.165l.224-.083.985.983c.646.644 1.036 1.004 1.134 1.045.586.242 1.184-.315.991-.924-.04-.126-.759-.867-3.88-3.995l-3.832-3.84-.018-.52c-.015-.448-.034-.569-.139-.87-.173-.498-.34-.758-.751-1.17-.606-.606-1.243-.874-2.09-.878l-.45-.002-2.25-2.25L7.06 6h9.941l-.726-1.087c-.399-.598-.806-1.174-.904-1.279a2.073 2.073 0 0 0-.794-.524c-.236-.09-.246-.09-2.577-.09s-2.341 0-2.577.09a2.075 2.075 0 0 0-.795.525c-.099.106-.5.673-.892 1.261l-.712 1.068-2.282-2.281C3.159 2.101 2.414 1.384 2.311 1.341a.76.76 0 0 0-.611.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraSilent);
export default ForwardRef;
