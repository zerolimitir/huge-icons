import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFacebook = (
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
            d='M18 3h-3a5 5 0 0 0-5 5v13h4V8a1 1 0 0 1 1-1h3V3Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M6 14h12v-4H6v4Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgFacebook);
export default ForwardRef;
