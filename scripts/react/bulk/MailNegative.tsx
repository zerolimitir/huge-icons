import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailNegative = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.811 4.278a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025M5.698 11.315a.779.779 0 0 0-.416.476c-.062.222-.052.333.048.531.077.153.268.312 1.35 1.129 1.803 1.361 2.155 1.522 3.32 1.522s1.517-.161 3.32-1.522c1.082-.817 1.273-.976 1.35-1.129.1-.198.11-.309.048-.531-.114-.41-.593-.655-.973-.496-.073.031-.679.466-1.349.967-1.489 1.116-1.688 1.217-2.396 1.217s-.907-.101-2.396-1.217c-.67-.501-1.276-.936-1.349-.967a.672.672 0 0 0-.557.02'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailNegative);
export default ForwardRef;
