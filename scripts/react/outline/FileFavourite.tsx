import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.679.679 1.301 1.042 2.165 1.263.588.15.937.164 3.594.148 2.779-.018 2.701-.012 3.44-.256a4.76 4.76 0 0 0 1.18-.587c.392-.264 6.358-6.198 6.744-6.707.419-.554.695-1.159.884-1.94.06-.249.069-.67.082-3.84.01-2.318 0-3.686-.027-3.921a4.623 4.623 0 0 0-1.256-2.722c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.475-.047-10.484-.045-10.963.002m11.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v3.76c0 2.953-.011 3.796-.052 3.93l-.051.17-1.589.001c-1.756.001-2.197.03-2.764.179-.466.123-1.242.498-1.611.779-.382.29-.938.897-1.184 1.291a4.886 4.886 0 0 0-.688 1.962c-.023.179-.041 1.077-.041 1.995v1.67l-.17.051c-.132.04-.793.052-2.93.052H6.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 3.912 19l-.132-.38V5.38L3.912 5c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 5.214 3.29c.31-.205.861-.43 1.194-.486.119-.02 2.634-.033 5.712-.03l5.5.006.374.131M10.28 5.278A2.4 2.4 0 0 0 8.629 6.32c-.32.487-.456 1.221-.333 1.799.117.55.255.768 1.371 2.163.57.714 1.117 1.366 1.214 1.449.231.199.522.333.852.394.467.086 1.004-.066 1.386-.394.097-.083.644-.735 1.214-1.449.747-.933 1.076-1.377 1.173-1.581.457-.963.26-2.082-.493-2.806-.429-.412-.995-.629-1.633-.625-.465.003-.792.09-1.15.306l-.23.138-.23-.139c-.409-.247-.995-.363-1.49-.297m.629 1.543c.081.034.256.166.389.294.299.287.462.374.702.374.24 0 .403-.087.702-.374.275-.264.458-.355.712-.355.328 0 .641.208.767.509.092.219.075.557-.039.791-.054.11-.526.731-1.05 1.38-.92 1.141-.957 1.18-1.092 1.18-.135 0-.172-.039-1.092-1.18-.524-.649-.996-1.27-1.05-1.38-.114-.234-.131-.572-.039-.791a.98.98 0 0 1 .436-.448.991.991 0 0 1 .654 0m5.571 10.64-2.7 2.7-.013-.17c-.007-.094-.007-.72.001-1.391l.014-1.22.131-.38c.072-.209.204-.504.294-.655a3.826 3.826 0 0 1 1.007-1.055c.31-.206.862-.43 1.194-.485.117-.02.788-.038 1.492-.04l1.28-.005-2.7 2.701'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileFavourite);
export default ForwardRef;