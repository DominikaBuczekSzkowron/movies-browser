import { StyledNavLink } from "../../Assets/Styles/styled";
import {
  MainTileContainer,
  Image,
  MainTileTitle,
  MainTileYear,
  Tag,
  Tags,
  Content,
  MainTailBox,
} from "./styled";
import { MainTailScores } from "./MainTailScores/index";
import { images } from "../../apiURLs";
import { useSelector } from "react-redux";
import { selectGenres } from "./genresSlice";
import noPoster from "../../Assets/Images/noPoster.png";

export const MainTile = ({ id, title, subtitle, tags, rate, poster }) => {
  const genres = useSelector(selectGenres);

  return (
    <StyledNavLink to={`/movies/${id}`}>
      <MainTileContainer>
        <Image
          src={poster ? `${images}${poster}` : noPoster}
          alt={`${title} poster`}
        />
        <MainTailBox>
          <Content>
            <MainTileTitle>{title}</MainTileTitle>
            <MainTileYear>{subtitle}</MainTileYear>
            <Tags>
              {genres && tags ? (
                tags
                  .slice(0, 3)
                  .map((tag) => (
                    <Tag key={tag}>
                      {genres.find((genre) => genre.id === tag)?.name}
                    </Tag>
                  ))
              ) : (
                <Tag>No Data</Tag>
              )}
            </Tags>
          </Content>
          {rate ? <MainTailScores data={rate} /> : null}
        </MainTailBox>
      </MainTileContainer>
    </StyledNavLink>
  );
};
