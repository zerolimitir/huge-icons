import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWheelChairHuman = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.601 2.064a1.51 1.51 0 0 0-1.002.926c-.069.186-.083.295-.072.57.018.421.141.712.421.991.731.73 1.968.513 2.404-.422.15-.322.171-.812.049-1.139a1.495 1.495 0 0 0-1.02-.928 1.354 1.354 0 0 0-.78.002m.206 4.225c-.249.053-.465.281-.523.549-.03.143-.044 1.446-.044 4.245 0 4.377-.009 4.194.212 4.43.209.224.218.225 1.725.247l1.397.02 1.218 2.08 1.653 2.82c.459.783.613.968.861 1.037.203.056 1.593.055 1.856-.001.666-.143.781-1.082.17-1.379-.121-.058-.283-.078-.788-.095l-.635-.022-1.655-2.84c-1.013-1.738-1.703-2.881-1.779-2.946-.199-.172-.383-.194-1.593-.194H12.76l-.001-3.61c-.001-2.336-.016-3.673-.042-3.789-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWheelChairHuman);
export default ForwardRef;
