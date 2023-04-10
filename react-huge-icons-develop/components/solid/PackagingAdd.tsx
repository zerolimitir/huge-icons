import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingAdd = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22 8.465v9.597a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.465a4 4 0 0 1 .054-.653h19.892c.036.215.054.433.054.653Zm-.629-2.153a4.02 4.02 0 0 0-.247-.346L19.2 3.563a4 4 0 0 0-3.123-1.5H7.923a4 4 0 0 0-3.124 1.5L2.877 5.966a4.003 4.003 0 0 0-.248.346H21.37ZM15 14.812a.75.75 0 0 0 0-1.5h-2.25v-2.25a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingAdd);
export default ForwardRef;
