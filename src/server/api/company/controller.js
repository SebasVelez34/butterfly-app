import Repository from './repository';

const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Repository.companyFindOneById({ id });
    res.send(company);
  } catch (err) {
    return res.status(500).send({
      status: err.message
    });
  }
};

export default {
  getCompanyById
}