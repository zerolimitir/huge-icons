import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.28 9.06c-1.068.216-1.93.853-2.382 1.76-.334.669-.478 1.471-.384 2.13.133.923.636 1.918 1.551 3.07.352.443 1.85 1.98 1.93 1.98.073 0 1.287-1.209 1.684-1.677 1.401-1.651 1.965-2.979 1.802-4.243-.208-1.604-1.244-2.725-2.795-3.024-.359-.069-1.055-.067-1.406.004m.981 1.984c.481.089.867.381 1.082.818.106.215.117.277.117.638s-.011.423-.117.638a1.493 1.493 0 0 1-2.686 0c-.106-.215-.117-.277-.117-.638s.011-.423.117-.638a1.461 1.461 0 0 1 1.023-.806c.284-.064.302-.064.581-.012'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeLocation);
export default ForwardRef;
