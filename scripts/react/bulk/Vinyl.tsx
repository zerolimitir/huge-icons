import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVinyl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 5.313c-.276.132-.461.413-.459.696.002.293.246.618.528.704.072.022.311.051.531.065a5.194 5.194 0 0 1 3.401 1.521c.351.351.759.906.966 1.315.312.616.51 1.358.555 2.086.03.473.069.619.21.787a.738.738 0 0 0 .87.198c.368-.167.48-.434.445-1.063a6.81 6.81 0 0 0-1.153-3.408c-.408-.613-1.21-1.41-1.834-1.824a6.682 6.682 0 0 0-3.42-1.134c-.418-.018-.501-.01-.64.057m-.262 4.762a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVinyl);
export default ForwardRef;
