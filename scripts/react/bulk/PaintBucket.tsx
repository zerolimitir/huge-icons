import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPaintBucket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.165 12.43c.016.149.058.349.092.445.164.458.266.57 2.741 3.03 1.332 1.323 2.512 2.481 2.622 2.572.382.317.944.521 1.444.522.246.001.745-.122.983-.241.095-.048.29-.184.433-.302.143-.117 1.637-1.581 3.32-3.253l3.06-3.04-7.362-.001-7.363-.002.03.27m17.569 2.837c-.745.867-1.306 1.778-1.584 2.573a3.258 3.258 0 0 0-.094 1.568c.211.948.809 1.481 1.768 1.572.547.053 1.185-.165 1.55-.528.346-.344.515-.729.59-1.344.098-.807-.176-1.645-.897-2.743-.265-.403-.823-1.119-.997-1.278l-.101-.093-.235.273'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaintBucket);
export default ForwardRef;
