import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBrightness = (
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
        <circle cx={12} cy={12} r={6} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.75 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0 17.478a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM21.876 6.375a.75.75 0 0 1-.274 1.024l-.867.5a.75.75 0 1 1-.75-1.299l.867-.5a.75.75 0 0 1 1.024.275Zm-17.6 9.5A.75.75 0 0 1 4 16.9l-.866.5a.75.75 0 0 1-.75-1.3l.866-.5a.75.75 0 0 1 1.025.275Zm-2.152-9.5A.75.75 0 0 1 3.148 6.1l.866.5a.75.75 0 1 1-.75 1.3l-.866-.5a.75.75 0 0 1-.274-1.025Zm17.586 9.5a.75.75 0 0 1 1.025-.274l.867.5a.75.75 0 0 1-.75 1.299l-.867-.5a.75.75 0 0 1-.274-1.025Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBrightness);
export default ForwardRef;
