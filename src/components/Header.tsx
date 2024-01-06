import { A, useLocation, useNavigate } from '@solidjs/router'
import { FaSolidBars, FaSolidChevronDown, FaSolidMagnifyingGlass, FaSolidXmark } from 'solid-icons/fa'
import { ParentComponent, Setter, VoidComponent, createContext, createMemo, createSignal, useContext } from 'solid-js'
import kretalogo from '~/assets/icons/kreta.png'
import styles from './Header.module.scss'
import Logo from './Logo'

const DropdownContext = createContext<Setter<string[]>>()

const MenuDropdown: ParentComponent<{ title: string }> = (props) => {
  const [submenuOpen, setSubmenuOpen] = createSignal(false)
  const [links, setLinks] = createSignal<string[]>([])

  const location = useLocation()
  const activeSubmenu = createMemo(() => links().includes(location.pathname))

  return (
    <DropdownContext.Provider value={setLinks}>
      <li classList={{ [styles.open]: submenuOpen() }}>
        <div class={styles.submenu}>
          <span classList={{ [styles.active]: activeSubmenu() }} onClick={() => setSubmenuOpen((x) => !x)}>
            {props.title}
          </span>
          <FaSolidChevronDown class={styles.chevron} />
        </div>
        <ul>{props.children}</ul>
      </li>
    </DropdownContext.Provider>
  )
}

const MenuItemKreta: VoidComponent = () => {
  return (
    <li>
      <a
        href="https://klik035992001.e-kreta.hu/Adminisztracio/Login"
        target="_blank"
        rel="noopener noreferrer external"
      >
        <img class="kreta" src={kretalogo} alt="Kréta logó" />
      </a>
    </li>
  )
}

const MenuItem: ParentComponent<{ href: string }> = (props) => {
  const setLinks = useContext(DropdownContext)

  if (setLinks !== undefined) {
    // eslint-disable-next-line solid/reactivity
    setLinks((links) => [...links, props.href])
  }

  return (
    <li>
      <A href={props.href} activeClass={styles.active} end>
        {props.children}
      </A>
    </li>
  )
}

const Search: VoidComponent<{ class: string }> = (props) => {
  let inputRef: HTMLInputElement
  const navigate = useNavigate()

  const onSearch = (event: Event) => {
    event.preventDefault()

    if (!inputRef.value) return

    navigate(`/search?term=${encodeURIComponent(inputRef.value)}`)
  }

  return (
    <form onSubmit={onSearch} role="search" class={props.class}>
      <label class="search">
        <FaSolidMagnifyingGlass class={styles.icon} />
        <input type="text" placeholder="Keresés" ref={inputRef!} />
      </label>
    </form>
  )
}

const Header: VoidComponent = () => {
  const [drawerOpen, setDrawerOpen] = createSignal(false)

  return (
    <header class={styles.header}>
      <nav>
        <div>
          <Logo />
        </div>
        <div class={styles.drawer} classList={{ [styles.open]: drawerOpen() }}>
          <div class={styles.header}>
            <button onClick={() => setDrawerOpen(false)}>
              <FaSolidXmark size="2rem" />
            </button>
          </div>
          <Search class={styles.top} />
          <ul class={styles.mainMenu}>
            <MenuItem href="/">Főoldal</MenuItem>
            <MenuItem href="/information">Információk</MenuItem>
            <MenuDropdown title="Menza">
              <MenuItem href="/canteen">Étlap</MenuItem>
              <MenuItem href="/pages/menza-tajekoztatok-nyilatkozatok">Tájékoztatók, Nyilatkozatok</MenuItem>
              <MenuItem href="/pages/menza-ugyintezes-etkezes-lemondas">Ügyinténzés, étkezés lemondása</MenuItem>
            </MenuDropdown>
            <MenuItem href="/events">Események</MenuItem>
            <MenuItem href="/information/beiskolazas">Beiskolázás</MenuItem>
            <MenuItemKreta />
          </ul>
          <Search class={styles.bottom} />
        </div>
        <button class={styles.menuOpen} onClick={() => setDrawerOpen(true)}>
          <FaSolidBars size="2rem" />
        </button>
      </nav>
      <div class={styles.backdrop} classList={{ [styles.open]: drawerOpen() }} onClick={() => setDrawerOpen(false)} />
    </header>
  )
}

export default Header
