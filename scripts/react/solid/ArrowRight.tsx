import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.66 7.307a.696.696 0 0 0-.344.341.787.787 0 0 0 .001.664c.043.081.7.769 1.461 1.528l1.382 1.38-5.193.02-5.193.02-.168.112c-.295.194-.414.501-.325.832.059.218.288.453.5.511.112.032 1.667.045 5.279.045h5.12l-1.406 1.41c-.774.775-1.435 1.468-1.47 1.538-.122.244-.065.603.131.826.191.218.577.284.865.149.108-.05.845-.762 2.267-2.189C18.733 12.32 18.76 12.29 18.76 12c0-.29-.027-.32-2.193-2.494-1.422-1.427-2.159-2.139-2.267-2.189-.195-.092-.478-.096-.64-.01'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
