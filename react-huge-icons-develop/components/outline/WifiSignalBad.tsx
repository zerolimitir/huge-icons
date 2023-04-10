import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifiSignalBad = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m19.5 10.875 1.464-1.977c.594-.801.513-1.93-.26-2.56-5.448-4.45-11.96-4.45-17.408 0-.773.63-.854 1.759-.26 2.56l7.357 9.932a2 2 0 0 0 3.214 0l.615-.83m7.021-4L17 18.243M17 14l4.243 4.243'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiSignalBad);
export default ForwardRef;
