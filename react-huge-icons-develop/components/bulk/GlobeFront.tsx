import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlobeFront = (
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
        <circle cx={12} cy={9} r={7} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2 8.25a.75.75 0 0 1 .75.75 9.25 9.25 0 0 0 18.5 0 .75.75 0 0 1 1.5 0c0 5.685-4.413 10.34-10 10.724v1.526H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.526c-5.587-.385-10-5.04-10-10.724A.75.75 0 0 1 2 8.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeFront);
export default ForwardRef;
