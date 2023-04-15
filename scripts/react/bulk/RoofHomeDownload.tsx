import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeDownload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 8.316a.734.734 0 0 0-.398.413c-.054.13-.062.546-.062 3.298v3.149l-.45-.443c-.401-.395-.471-.448-.646-.485a.75.75 0 0 0-.886.533c-.052.178-.052.226 0 .401.053.177.146.284.891 1.022.457.452.894.86.971.905.557.324 1.331.298 1.849-.063.094-.066.516-.467.938-.893.542-.546.775-.808.793-.893.015-.066.035-.145.044-.176.01-.031-.009-.148-.041-.261a.767.767 0 0 0-.522-.525c-.175-.052-.252-.051-.481.011-.044.012-.273.212-.51.444l-.43.422-.001-3.157c-.001-2.985-.005-3.167-.075-3.318-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeDownload);
export default ForwardRef;
