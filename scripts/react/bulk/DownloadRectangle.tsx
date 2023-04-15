import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDownloadRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.807 2.289c-.249.053-.465.281-.523.549-.031.144-.044 1.724-.044 5.274v5.067l-.91-.908c-.591-.59-.962-.93-1.059-.97-.369-.152-.78.019-.955.399a.668.668 0 0 0-.015.571c.085.205 3.175 3.307 3.399 3.412a.661.661 0 0 0 .571.016c.102-.042.668-.58 1.78-1.69 1.472-1.47 1.637-1.647 1.688-1.819.163-.544-.32-1.059-.884-.942-.184.038-.248.093-1.145.985l-.95.945-.001-5.079c-.001-3.346-.015-5.14-.042-5.258-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDownloadRectangle);
export default ForwardRef;
