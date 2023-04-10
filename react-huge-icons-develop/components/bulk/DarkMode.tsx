import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDarkMode = (
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
        <path fill='currentColor' d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2v20Z' />
        <path
            fill='currentColor'
            d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2v20Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDarkMode);
export default ForwardRef;
