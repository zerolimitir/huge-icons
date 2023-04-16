import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDisLike = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.589 2.282c-.715.079-1.604.415-2.183.825a5.12 5.12 0 0 0-1.362 1.462c-.326.537-.415.837-1.328 4.475-.87 3.469-.887 3.544-.889 3.956-.002.478.069.796.265 1.196a2.852 2.852 0 0 0 1.768 1.469c.214.063.484.072 2.47.085 1.227.007 2.23.021 2.23.03 0 .009-.179.289-.399.622-.575.875-.739 1.346-.735 2.118.008 1.304.812 2.501 2.005 2.983.502.202.661.226 1.649.246 1.054.022 1.21 0 1.419-.201.078-.076.858-1.403 1.921-3.268.984-1.727 1.794-3.145 1.799-3.151.005-.006.119.063.253.152.312.208.629.337 1.037.419.47.095 2.831.068 3.191-.037a2.837 2.837 0 0 0 1.967-1.983c.068-.244.073-.502.073-4.18s-.005-3.936-.073-4.18a2.822 2.822 0 0 0-2.017-1.99c-.401-.103-2.899-.103-3.3 0a3.143 3.143 0 0 0-1.09.55c-.138.11-.263.2-.276.2-.014 0-.427-.268-.918-.596-1.17-.781-1.53-.957-2.314-1.133-.349-.078-.511-.083-2.612-.093-1.232-.006-2.38.005-2.551.024m5.084 1.59c.161.05.403.145.537.213.284.143 1.907 1.215 1.98 1.307.039.05.05.959.049 4.246l-.001 4.182-1.831 3.2-1.83 3.2h-1.362l-.304-.15c-.805-.399-1.193-1.356-.881-2.172.042-.109.437-.74.879-1.403.851-1.278.897-1.374.814-1.685a.733.733 0 0 0-.354-.457l-.149-.093-3-.02c-2.94-.02-3.004-.022-3.18-.104a1.437 1.437 0 0 1-.603-.603 1.347 1.347 0 0 1-.106-.447c-.017-.244.054-.556.841-3.695.893-3.568.941-3.729 1.271-4.221.356-.53.98-1.008 1.614-1.237.438-.159.607-.168 3.003-.159 2.276.009 2.326.011 2.613.098m7.864 1.005c.251.123.463.335.586.586l.097.197v7.68l-.098.199a1.306 1.306 0 0 1-.665.619c-.205.076-.306.082-1.457.082s-1.252-.006-1.457-.082c-.267-.1-.53-.345-.665-.619l-.098-.199-.012-3.76c-.009-2.721.001-3.804.034-3.92.069-.244.269-.53.464-.664.334-.23.358-.233 1.774-.224 1.287.008 1.302.009 1.497.105'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDisLike);
export default ForwardRef;