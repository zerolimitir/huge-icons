import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterEnable = (
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
            d='M4 8.45v-.124h.01A1.567 1.567 0 0 0 4 8.45Zm.004.163c.102 3.628 2.14 6.71 4.996 8.003v3.395c0 1.477 1.565 2.437 2.894 1.777l2-.994A1.985 1.985 0 0 0 15 19.018v-2.402c2.932-1.326 5-4.538 5-8.29h-.01a1.577 1.577 0 0 1 .006.286C19.861 10.493 16.333 12 12 12c-4.332 0-7.86-1.507-7.996-3.387Z'
            clipRule='evenodd'
        />
        <ellipse cx={12} cy={8.5} fill='currentColor' opacity={0.4} rx={8} ry={3.5} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M14 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm-4 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Zm0-5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterEnable);
export default ForwardRef;
