import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingCancel = (
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
            d='M22 8.403V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.403a4 4 0 0 1 .054-.653h19.892c.036.215.054.433.054.653Zm-.629-2.153a4.02 4.02 0 0 0-.247-.346L19.2 3.501A4 4 0 0 0 16.078 2H7.923a4 4 0 0 0-3.125 1.5L2.877 5.904a4.003 4.003 0 0 0-.248.346H21.37ZM9.348 15.59a.75.75 0 1 0 1.061 1.061L12 15.061l1.591 1.59a.75.75 0 1 0 1.06-1.06L13.062 14l1.59-1.591a.75.75 0 0 0-1.06-1.06L12 12.938l-1.591-1.59a.75.75 0 1 0-1.06 1.06l1.59 1.59-1.59 1.592Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingCancel);
export default ForwardRef;
