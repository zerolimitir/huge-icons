import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterThreeLine = (
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
            d='M5 21.75a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75Zm7 0a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75Zm0-15a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Zm-7 5a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75Zm14 1a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75Zm0 9a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <circle cx={19} cy={17} r={2} fill='currentColor' transform='rotate(-90 19 17)' />
        <circle cx={12} cy={7} r={2} fill='currentColor' transform='rotate(-90 12 7)' />
        <circle cx={5} cy={12} r={2} fill='currentColor' transform='rotate(-90 5 12)' />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLine);
export default ForwardRef;
