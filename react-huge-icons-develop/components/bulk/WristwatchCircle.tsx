import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWristwatchCircle = (
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
            d='M17 20.5v-5H7v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2Zm0-17.69v5H7v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm.75-10a.75.75 0 1 0-1.5 0v2.537l-1.585.792a.75.75 0 1 0 .67 1.342l2-1A.75.75 0 0 0 12.75 12V9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWristwatchCircle);
export default ForwardRef;
