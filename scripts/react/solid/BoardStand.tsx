import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoardStand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.433 3.043a4.302 4.302 0 0 0-1.702.669c-.766.52-1.322 1.304-1.6 2.256l-.109.372-.012 4.946-.012 4.946-.612.014c-.591.014-.618.018-.78.126-.295.194-.414.501-.325.832.059.218.288.453.5.511.112.031 1.54.045 4.809.045h4.65v2.475l-1.233.012-1.233.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.233-.013-1.233-.012V17.76h4.65c3.269 0 4.697-.014 4.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832-.162-.108-.189-.112-.78-.126l-.612-.015-.011-4.925-.011-4.926-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.079 5.079 0 0 0-1.311-.599l-.338-.091-5.48-.007c-3.014-.003-5.582.009-5.707.028m9.94 4.312c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.081-.178.082-4.359.082s-4.221-.001-4.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.988-.028 4.265-.024l4.14.006.153.095m-4 4c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.136.08-.194.082-2.359.082s-2.223-.002-2.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.055-1.013.431-1.132.069-.017 1.088-.027 2.265-.024l2.14.007.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoardStand);
export default ForwardRef;
