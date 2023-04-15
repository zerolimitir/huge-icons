import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileDownload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 5.316a.734.734 0 0 0-.398.413c-.053.128-.062.446-.062 2.27 0 1.166-.014 2.121-.03 2.121-.017 0-.418-.388-.89-.863-.473-.474-.914-.891-.979-.925-.143-.076-.487-.083-.623-.013-.393.202-.563.673-.376 1.041.028.055.507.551 1.065 1.102.907.896 1.044 1.017 1.313 1.15a2.824 2.824 0 0 0 2.56 0c.27-.133.406-.253 1.351-1.189.939-.93 1.057-1.061 1.108-1.232a.751.751 0 0 0-.884-.943c-.184.038-.248.093-1.116.956-.507.504-.934.916-.95.916-.016 0-.029-.958-.03-2.13-.001-1.985-.006-2.141-.075-2.29-.181-.392-.607-.558-.984-.384m4.54 8.746c-1.648.352-2.85 1.562-3.178 3.2-.055.273-.062.634-.053 2.528L13.02 22l4-4 4-4-2.26.003c-1.768.003-2.317.015-2.52.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileDownload);
export default ForwardRef;
