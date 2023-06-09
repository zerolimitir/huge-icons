import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.7 5.316a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.743.743 0 0 0 0-1.368c-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074m7.3 9.683V22h3.642c3.122 0 3.684-.009 3.939-.062a3.003 3.003 0 0 0 2.357-2.357c.093-.448.093-8.714 0-9.162a2.96 2.96 0 0 0-1.642-2.107c-.64-.308-.325-.287-4.526-.302L12 7.997v7.002M4.7 8.316a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.743.743 0 0 0 0-1.368c-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074m14.673 3.039c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.136.08-.194.082-2.359.082s-2.223-.002-2.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.017 1.088-.027 2.265-.024l2.14.007.153.095m0 3c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.136.08-.194.082-2.359.082s-2.223-.002-2.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.017 1.088-.027 2.265-.024l2.14.007.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileDouble);
export default ForwardRef;
