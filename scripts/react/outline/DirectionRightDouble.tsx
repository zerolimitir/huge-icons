import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionRightDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M6.815 6.277a.776.776 0 0 0-.549.596c-.062.327-.044.354 1.919 2.807L10.04 12l-1.855 2.32c-2.017 2.521-1.998 2.493-1.902 2.851.095.353.348.559.691.562.407.004.335.081 2.588-2.736 1.139-1.424 2.093-2.631 2.121-2.683.065-.121.065-.507 0-.628-.028-.052-.982-1.259-2.121-2.683-1.536-1.92-2.105-2.605-2.206-2.652a.858.858 0 0 0-.541-.074m6 0a.776.776 0 0 0-.549.596c-.062.327-.044.354 1.919 2.807L16.04 12l-1.855 2.32c-2.017 2.521-1.998 2.493-1.902 2.851.095.353.348.559.691.562.407.004.335.081 2.588-2.736 1.139-1.424 2.093-2.631 2.121-2.683.065-.121.065-.507 0-.628-.028-.052-.982-1.259-2.121-2.683-1.536-1.92-2.105-2.605-2.206-2.652a.858.858 0 0 0-.541-.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionRightDouble);
export default ForwardRef;
