import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSmartDoor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.4 1.283a6.794 6.794 0 0 0-3.724 1.541c-.573.477-.671.639-.626 1.038.05.447.576.742 1.004.563.073-.03.247-.159.389-.285a5.49 5.49 0 0 1 2.517-1.287c.472-.101 1.604-.102 2.068-.002.965.208 1.81.642 2.559 1.316.18.162.349.277.454.309a.746.746 0 0 0 .941-.616c.051-.342-.089-.562-.658-1.036a6.734 6.734 0 0 0-3.792-1.544c-.522-.043-.584-.043-1.132.003m.155 2.996a4.06 4.06 0 0 0-1.688.636c-.335.231-.619.521-.689.705-.212.555.314 1.138.889.983a1.27 1.27 0 0 0 .375-.228c.29-.248.475-.362.793-.487.235-.092.321-.104.765-.104s.53.012.765.104c.308.122.536.259.751.453.397.358.897.339 1.19-.045.156-.205.177-.568.045-.794-.231-.398-1.114-.946-1.803-1.121-.423-.106-1.009-.149-1.393-.102M9.433 8.042a4.331 4.331 0 0 0-1.702.67c-.775.527-1.335 1.322-1.602 2.277l-.109.391v7.24l.111.397c.347 1.242 1.226 2.235 2.389 2.698.165.066.487.158.715.204.4.081.502.084 2.9.072l2.485-.013.391-.107a4.002 4.002 0 0 0 2.908-3.103c.082-.404.083-.491.072-3.9l-.012-3.488-.106-.385c-.261-.948-.828-1.756-1.604-2.283a5.022 5.022 0 0 0-1.311-.598c-.33-.087-.397-.089-2.818-.098-1.364-.005-2.582.007-2.707.026m-.141 4.772c.155.065.375.305.417.457.04.142.04 3.316 0 3.458-.042.152-.262.392-.417.457a.85.85 0 0 1-.584 0c-.155-.065-.375-.305-.417-.457-.04-.142-.04-3.316 0-3.458.041-.147.259-.39.408-.455a.881.881 0 0 1 .593-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartDoor);
export default ForwardRef;