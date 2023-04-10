import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifiSignalOff = (
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
            d='M3.53 2.47a.75.75 0 0 0-1.06 1.06l3.189 3.19c-.805.45-1.595.99-2.363 1.617-.773.631-.854 1.76-.26 2.561l7.357 9.932a2 2 0 0 0 3.214 0l2.623-3.54 4.24 4.24a.75.75 0 1 0 1.06-1.06l-18-18Zm17.434 8.428c.594-.801.513-1.93-.26-2.56-3.774-3.083-8.06-4.03-12.147-2.842l9.426 9.427 2.981-4.025Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiSignalOff);
export default ForwardRef;
