import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpringNotesEditFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.979.814c-.166.075-.366.313-.417.495-.023.083-.042.495-.042.915v.764l-.43.025a4.002 4.002 0 0 0-2.632 1.164c-.498.49-.87 1.146-1.069 1.883-.087.32-.087.322-.1 6-.009 4.046 0 5.772.032 6 .088.629.394 1.361.774 1.853.591.765 1.364 1.259 2.337 1.493.432.105 1.525.129 1.788.04.131-.045 1.306-1.199 6.513-6.4 3.731-3.727 6.388-6.412 6.44-6.506.08-.147.088-.227.1-.98.015-.944-.024-1.293-.209-1.844-.52-1.553-1.915-2.603-3.594-2.703l-.43-.025v-.806c0-.779-.003-.813-.099-1.004a.88.88 0 0 0-.242-.294.867.867 0 0 0-.672-.086c-.18.059-.409.311-.464.509-.023.084-.043.499-.043.923V3H9.04v-.812c0-.785-.003-.819-.099-1.01-.133-.265-.322-.39-.615-.406a.845.845 0 0 0-.347.042m3.587 7.838c.124.06.337.213.474.339l.251.23.231-.226a2.22 2.22 0 0 1 .464-.34c.215-.105.271-.115.674-.115.42 0 .451.006.694.133.896.467 1.196 1.653.631 2.493-.069.103-.532.616-1.03 1.141-.636.67-.959.981-1.084 1.043a1.295 1.295 0 0 1-.795.129c-.433-.082-.531-.168-2.109-1.851-.218-.232-.417-.488-.487-.629-.48-.95-.004-2.114 1-2.444.055-.018.272-.028.481-.023.323.009.416.027.605.12m7.594 3.904c-.42.139-.45.166-3.173 2.88-1.47 1.465-2.705 2.727-2.745 2.804-.108.21-.722 2.398-.722 2.575 0 .12.029.182.134.287.222.222.253.22 1.382-.101.563-.16 1.141-.326 1.284-.369l.26-.079 2.692-2.686c2.504-2.499 2.702-2.707 2.833-2.97.409-.824.063-1.812-.782-2.228-.232-.114-.3-.129-.661-.137-.221-.005-.447.005-.502.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesEditFavourite);
export default ForwardRef;