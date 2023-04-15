import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEducationCompass = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.807 1.289c-.249.053-.465.281-.523.549-.026.12-.044.636-.044 1.239v1.034l-.21.068c-1.576.509-2.457 2.109-2.024 3.675.361 1.3 1.606 2.225 2.994 2.225 1.854 0 3.325-1.62 3.081-3.396a3.07 3.07 0 0 0-2.191-2.53l-.13-.037-.001-1.048c-.001-.576-.02-1.129-.042-1.227-.097-.421-.47-.647-.91-.552m-9 12.998a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.292.062 18.032.062 18.324 0 .758-.163.758-1.269 0-1.432-.268-.057-18.097-.054-18.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEducationCompass);
export default ForwardRef;
