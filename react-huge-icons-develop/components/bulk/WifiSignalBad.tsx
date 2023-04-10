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
            fill='currentColor'
            d='M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56L14.222 18l-.615.83a2 2 0 0 1-3.214 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.47 13.47a.75.75 0 0 1 1.06 0l1.591 1.59 1.591-1.59a.75.75 0 0 1 1.061 1.06l-1.591 1.591 1.591 1.591a.75.75 0 0 1-1.06 1.061l-1.592-1.591-1.59 1.591a.75.75 0 0 1-1.061-1.06l1.59-1.592-1.59-1.59a.75.75 0 0 1 0-1.061Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiSignalBad);
export default ForwardRef;
