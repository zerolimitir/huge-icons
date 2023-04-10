import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgParcel = (
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
            d='M22 8.465v9.597a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.465a4 4 0 0 1 .054-.653h19.892c.036.215.054.433.054.653Zm-.629-2.153a4.02 4.02 0 0 0-.247-.346L19.2 3.563a4 4 0 0 0-3.123-1.5H7.923a4 4 0 0 0-3.124 1.5L2.877 5.966a4.003 4.003 0 0 0-.248.346H21.37ZM8.25 13.46l-.72.72a.75.75 0 0 1-1.06-1.061l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 0 1-1.06 1.06l-.72-.72v3.604a.75.75 0 0 1-1.5 0V13.46Zm5.28 1.487.72.72v-3.604a.75.75 0 0 1 1.5 0v3.604l.72-.72a.75.75 0 1 1 1.06 1.06L16.237 17.3a1.75 1.75 0 0 1-2.474 0l-1.293-1.293a.75.75 0 0 1 1.06-1.061Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgParcel);
export default ForwardRef;
