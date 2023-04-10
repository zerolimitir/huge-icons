import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgComputerPieces = (
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
            d='M12 16.25a.75.75 0 0 1 .75.75v3.5H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V17a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M5 18h14a3 3 0 0 0 3-3v-1H2v1a3 3 0 0 0 3 3Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgComputerPieces);
export default ForwardRef;
