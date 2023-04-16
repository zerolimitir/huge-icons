import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDeliveryDone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.225 3.141a3.603 3.603 0 0 0-1.005.35 3.322 3.322 0 0 0-.95.664 3.955 3.955 0 0 0-1.229 2.346c-.032.228-.042 1.583-.033 4.759.013 4.432.013 4.441.101 4.75.214.754.497 1.265.988 1.78.487.512.477.508.582.183a3.421 3.421 0 0 1 1.841-2.067 3.235 3.235 0 0 1 1.278-.334c1.847-.12 3.521 1.313 3.673 3.144l.029.344h3l.011-5.98c.012-6.206.006-6.493-.155-7.08-.291-1.066-1.087-2.024-2.094-2.519-.781-.384-.702-.375-3.402-.386-1.883-.007-2.416.002-2.635.046M15 12.17v5.09l.11-.163c.485-.719 1.188-1.205 2.09-1.442.177-.047.426-.07.78-.072.626-.004.947.066 1.5.324.966.451 1.607 1.219 1.91 2.291l.073.257.166-.248c.091-.136.207-.351.258-.478l.093-.229v-3.1c0-3.48.013-3.31-.3-3.795-.171-.265-3.029-2.973-3.393-3.216-.433-.288-.567-.309-2.011-.309H15v5.09m-3.715-4.793a.902.902 0 0 1 .396.381c.08.155.063.494-.032.656-.13.221-3.107 3.596-3.256 3.692-.434.28-.842.376-1.28.301a2.226 2.226 0 0 1-.486-.146c-.188-.09-1.777-1.326-2.1-1.634-.334-.318-.363-.726-.076-1.053a.74.74 0 0 1 .813-.212c.06.022.536.382 1.058.8.747.597.973.758 1.066.758.105 0 .263-.167 1.454-1.53 1.613-1.846 1.705-1.947 1.858-2.014a.835.835 0 0 1 .585.001M6.48 17.135a2.039 2.039 0 0 0-1.265 1.036 2.007 2.007 0 0 0 .574 2.475c.565.429 1.269.526 1.955.269.673-.252 1.192-.968 1.245-1.715.061-.868-.43-1.641-1.269-1.999-.273-.117-.952-.153-1.24-.066m11 0a2.039 2.039 0 0 0-1.265 1.036 2.007 2.007 0 0 0 .574 2.475c.565.429 1.269.526 1.955.269.673-.252 1.192-.968 1.245-1.715.061-.868-.43-1.641-1.269-1.999-.273-.117-.952-.153-1.24-.066'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryDone);
export default ForwardRef;