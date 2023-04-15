import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.551 5.502c-.748.182-1.354.797-1.507 1.53-.062.298-.062 9.638 0 9.936.138.663.623 1.214 1.296 1.473.194.075.321.093.66.095.368.002.451-.011.676-.105.141-.058 2.093-1.156 4.339-2.439 4.431-2.531 4.437-2.535 4.698-3.024a2.022 2.022 0 0 0 0-1.936c-.261-.489-.271-.495-4.655-2.998a606.208 606.208 0 0 0-4.212-2.393 2.425 2.425 0 0 0-.886-.197 2.28 2.28 0 0 0-.409.058'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlay);
export default ForwardRef;
